// travelBuddiesService.js
import supabase from '../config/supabaseClient'

// Function to find potential travel buddies
export const findTravelBuddies = async (userId, pickupLocation, dropLocation, pickupTime) => {
  try {
    // Convert pickup time to JavaScript Date object
    const pickupTimeDate = new Date(pickupTime);

    // Calculate lower and upper limits for pickup time
    const lowerLimit = new Date(pickupTimeDate.getTime() - 600000); // Subtract 600 seconds (10 minutes)
    const upperLimit = new Date(pickupTimeDate.getTime() + 600000); // Add 600 seconds (10 minutes)

    // Convert limits back to UTC format strings
    const lowerLimitString = lowerLimit.toISOString().slice(0, 19).replace('T', ' '); // Format: "YYYY-MM-DD HH:mm:ss"
    const upperLimitString = upperLimit.toISOString().slice(0, 19).replace('T', ' '); // Format: "YYYY-MM-DD HH:mm:ss"

    // Query the database to find potential travel buddies within the time range
    const { data, error } = await supabase
      .from('rides')
      .select('*')
      .filter('pickup_location', 'eq', pickupLocation)
      .filter('drop_location', 'eq', dropLocation)
      .filter('id', 'neq', userId) // Exclude current user
      .filter('pickup_time', 'gte', lowerLimitString) // Pickup time within 10 minutes difference
      .filter('pickup_time', 'lte', upperLimitString) // Pickup time within 10 minutes difference
      .order('pickup_time', { ascending: true }); // Order by pickup time

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error finding travel buddies:', error.message);
    return null;
  }
};
