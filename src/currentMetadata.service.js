const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const insertCurrentMetadata = async (data) => {
  let results;
  console.log(" Request IN services ", data);

  try {
    results = await prisma.currentmetadata.create({
      data: {
        tokenId: data.tokenID,
        backgroundValue: data.Background,
        hatValue: data.Hat,
        jacketValue: data.Jacket,
        hairValue: data.Hair,
        glassValue: data.Glasses,
        noseValue: data.Nose,
        earValue: data.Ear
      }
    });
  }
  catch (e) {
    console.log("Error ", e);
  }
  console.log("Result", results);
}

const getAllCurentMetadata = async (totalTokenID, callBack) => {
  console.log("🚀 ~ file: currentMetadata.service.js ~ line 32 ~ getAllCurentMetadata ~ totalTokenID", totalTokenID)
  let results = Object();
  try {
    const hatCount = await prisma.$queryRaw`Select * from (select "hatValue", count("hatValue") as totalCount,count("hatValue")*100/${totalTokenID} as per from public.currentmetadata  group by "hatValue") t where t.per<5`
    const hairCount = await prisma.$queryRaw`Select * from (select "hairValue", count("hairValue") as totalCount,count("hairValue")*100/${totalTokenID} as per from public.currentmetadata  group by "hairValue") t where t.per<5`
    const jacketCount = await prisma.$queryRaw` Select * from (select "jacketValue", count("jacketValue") as totalCount,count("jacketValue")*100/${totalTokenID} as per from public.currentmetadata  group by "jacketValue") t where t.per<5`
    const glassCount = await prisma.$queryRaw` Select * from (select "glassValue", count("glassValue") as totalCount,count("glassValue")*100/${totalTokenID} as per from public.currentmetadata  group by "glassValue") t where t.per<5`
    const earCount = await prisma.$queryRaw` Select * from (select "earValue", count("earValue") as totalCount,count("earValue")*100/${totalTokenID} as per from public.currentmetadata  group by "earValue") t where t.per<5`
    const noseCount = await prisma.$queryRaw` Select * from (select "noseValue", count("noseValue") as totalCount,count("noseValue")*100/${totalTokenID} as per from public.currentmetadata  group by "noseValue") t where t.per<5`

    const FreezhatTokenId = await prisma.$queryRaw`select "tokenId" from public.currentmetadata where "hatValue" in (Select "hatValue" from (select "hatValue", count("hatValue") as totalCount,count("hatValue")*100/${totalTokenID} as per from public.currentmetadata  group by "hatValue") t where t.per<5)`
    const FreezHairTokenId = await prisma.$queryRaw`select "tokenId" from public.currentmetadata where "hairValue" in (Select "hairValue" from (select "hairValue", count("hairValue") as totalCount,count("hairValue")*100/${totalTokenID} as per from public.currentmetadata  group by "hairValue") t where t.per<5)`
    const FreezJacketTokenId = await prisma.$queryRaw`select "tokenId" from public.currentmetadata where "jacketValue" in (Select "jacketValue" from (select "jacketValue", count("jacketValue") as totalCount,count("jacketValue")*100/${totalTokenID} as per from public.currentmetadata  group by "jacketValue") t where t.per<5)`
    const FreezGlassTokenId = await prisma.$queryRaw`select "tokenId" from public.currentmetadata where "glassValue" in (Select "glassValue" from (select "glassValue", count("glassValue") as totalCount,count("glassValue")*100/${totalTokenID} as per from public.currentmetadata  group by "glassValue") t where t.per<5)`
    const FreezNoseTokenId = await prisma.$queryRaw`select "tokenId" from public.currentmetadata where "noseValue" in (Select "noseValue" from (select "noseValue", count("noseValue") as totalCount,count("noseValue")*100/${totalTokenID} as per from public.currentmetadata  group by "noseValue") t where t.per<5)`
    const FreezEarTokenId = await prisma.$queryRaw`select "tokenId" from public.currentmetadata where "earValue" in (Select "earValue" from (select "earValue", count("earValue") as totalCount,count("earValue")*100/${totalTokenID} as per from public.currentmetadata  group by "earValue") t where t.per<5)`




    results.hatCount = hatCount
    results.FreezhatTokenId = FreezhatTokenId
    results.hairCount = hairCount
    results.FreezHairTokenId = FreezHairTokenId
    results.jacketCount = jacketCount
    results.FreezJacketTokenId = FreezJacketTokenId
    results.glassCount = glassCount
    results.FreezGlassTokenId = FreezGlassTokenId
    results.earCount = earCount
    results.FreezEarTokenId = FreezEarTokenId
    results.noseCount = noseCount
    results.FreezNoseTokenId = FreezNoseTokenId



  } catch (e) {
    callBack(e);
  }
  callBack(null, results);
}

const getAllSelectedMetadata = async (callBack) => {
  let results;
  try {
    results = await prisma.selectedmetadata.findMany();

  } catch (e) {
    callBack(e);
  }
  callBack(null, results);
}

const updateCurrentMetadataByTokenId = async (data, callBack) => {

  let results;
  tokenId = parseInt(data.tokenId);
  console.log("🚀 ~ file: selectedMetadat.service.js ~ line 67 ~ updateCurrentMetadataByTokenId ~ tokenId", tokenId)

  let traitType = parseInt(data.traitType);
  console.log("🚀 ~ file: selectedMetadat.service.js ~ line 68 ~ updateCurrentMetadataByTokenId ~ traitType", traitType)
  let traitValue = data.traitValue
  console.log("🚀 ~ file: selectedMetadat.service.js ~ line 70 ~ updateCurrentMetadataByTokenId ~ traitValue", traitValue)

  try {
    if (traitType == 1) {
      results = await prisma.currentmetadata.update({
        where: {
          tokenId: tokenId,
        },
        data: {
          hatValue: traitValue
        }
      })
    }
    if (traitType == 2) {
      results = await prisma.currentmetadata.update({
        where: {
          tokenId: tokenId,
        },
        data: {
          jacketValue: traitValue
        }
      })
    }
    if (traitType == 3) {
      results = await prisma.currentmetadata.update({
        where: {
          tokenId: tokenId,
        },
        data: {
          hairValue: traitValue
        }
      })
    }
    if (traitType == 4) {
      results = await prisma.currentmetadata.update({
        where: {
          tokenId: tokenId,
        },
        data: {
          noseValue: traitValue
        }
      })
    }
    if (traitType == 5) {
      results = await prisma.currentmetadata.update({
        where: {
          tokenId: tokenId,
        },
        data: {
          glassValue: traitValue
        }
      })
    }
    if (traitType == 6) {
      results = await prisma.currentmetadata.update({
        where: {
          tokenId: tokenId,
        },
        data: {
          earValue: traitValue
        }
      })

    }

  } catch (e) {
    console.log("🚀 ~ file: selectedMetadat.service.js ~ line 138 ~ updateCurrentMetadataByTokenId ~ e", e)
    callBack(e);
  }
  console.log("🚀 ~ file: selectedMetadat.service.js ~ line 141 ~ updateCurrentMetadataByTokenId ~ results", results)
  callBack(null, results);
}

const tokenIdOwner = async (data) => {
  let results;
  // console.log(" Request IN services ", data);

  try {
    results = await prisma.ownertokenid.upsert({
      where: {
        tokenId: data.tokenId,
      },
      update: {
        owner: data.owner,
      },
      create: {
        tokenId: data.tokenId,
        owner: data.owner
      },
    })
  }
  catch (e) {
    console.log("Error ", e);
  }
  console.log("Result", results);
}

const updateFreezeValue = async (data) => {
  let results;
  console.log(" Request IN services ", data);

  try {
    results = await prisma.freezetraits.upsert({
      where: {
        knowId: 1,
      },
      update: {
        hatFreeze: data.Hat,
        jacketFreeze: data.Jacket,
        hairFreeze: data.Hair,
        noseFreeze: data.Nose,
        glassFreeze: data.Glass,
        earFreeze: data.Ear
      },
      create: {
        knowId: 1,
        hatFreeze: data.Hat,
        jacketFreeze: data.Jacket,
        hairFreeze: data.Hair,
        noseFreeze: data.Nose,
        glassFreeze: data.Glass,
        earFreeze: data.Ear
      }
    });
  }
  catch (e) {
    console.log("Error ", e);
  }
  console.log("Result", results);
}

module.exports = {
  insertCurrentMetadata,
  getAllCurentMetadata,
  getAllSelectedMetadata,
  updateCurrentMetadataByTokenId,
  tokenIdOwner,
  updateFreezeValue
};