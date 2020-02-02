import Firebase from ".";

export const getTrips = changeTrips => {
  const tripsRef = Firebase.database.ref('trips');

  tripsRef.on('value', snapshot => {
    const snapShots = snapshot.val() || {};
    const trips = Object.values(snapShots);

    changeTrips(trips);
  });

  return () => tripsRef.off('value')
};