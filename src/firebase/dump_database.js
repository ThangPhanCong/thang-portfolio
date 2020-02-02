import Firebase from "./index";
const TOKYO = 'trips/Tokyo';
const OSAKA = 'trips/Osaka';
const NAGANO = 'trips/Nagano';
const KYOTO = 'trips/Kyoto';
const NAGOYA = 'trips/Nagoya';
const NARA = 'trips/Nara';

export const getStorage = async (ref) => {
  const {storageRef} = Firebase;
  const imageUrls = [];

  try {
    const listItems = await storageRef.child(ref).listAll();

    await Promise.all(listItems.items.map(async itemRef => {
      const item = await itemRef.getDownloadURL();
      imageUrls.push(item);
    }));

  } catch (error) {
    console.log("GetImageUrl._error:", error);
  }

  return imageUrls;
};

const createTrips = async (ref) => {
  const images = await getStorage(ref);

  return Firebase.database.ref(ref).update({images});
};

createTrips(NARA);