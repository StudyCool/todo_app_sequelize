const {User} = require('./db/models');

/*
*
* 4
* crud
* */

function  createUser (user) {

}

async function  getUser (id) {
  try {
    const user = await  User.findByPk(id);
    if(user) {
      return user.get() ;
    } else {
      throw new Error('404 resource not found');
    }

  } catch(e){
    console.error(e);
  }
  }

async function  updateUser1 (id, data) {
  try{
    const updatedUser = (await User.update( data, {
      where: {
        id,
      },
      returning: true
    } ))[1][0].get();
    return updatedUser;
  }
  catch (e) {
    throw e;
  }
}


async function  updateUser2 (id, data) {
try{
 const updatedUser = (await User.update( data, {
   where: {
     id,
   },
   returning: true
                                       } ))[1][0].get();
  return updatedUser;
  }
catch (e) {
  throw e;
}
}

function  deleteUser (id) {

}

getUser(87).then(console.log).catch(console.error);
