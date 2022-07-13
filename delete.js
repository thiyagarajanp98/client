const mongodb = require('./mongodb');

const Delete = async (id) => {
  const collection = await mongodb();
  await collection
    .collection('Albums')
    .deleteMany({ albumid: id }, async function (err) {
      if (err) throw err;
      console.log('All albums removed');
    });
  await collection
    .collection('Songs')
    .deleteMany({ albumid: id }, async function (err) {
      if (err) throw err;
      console.log('All songs removed');
    });
  // await collection
  //   .collection("artists")
  //   .deleteMany({ artistId: id }, async function (err) {
  //     if (err) throw err;
  //     console.log("Artist removed");
  //   });
};

module.exports = Delete;
