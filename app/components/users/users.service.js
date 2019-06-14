/**
 * Created by amurav on 12.04.2017.
 */
/**
 * Created by amurav on 08.04.2017.
 */
/**
 * Created by amurav on 08.04.2017.
 */

export class UsersService {

    constructor(Restangular) {
        this.Restangular = Restangular;
        this.users = this.Restangular.all('users');
        this.user = {};
    }

    getUsersAsync() {
        return this.users.getList();
    }

    setUser(data) {
        this.user = data;
    }

    getUser() {
        return this.user;
    }

    addUser(newUser) {
        this.users.post(newUser).then((newUsr) => {
            this.users = users.getList();
        })
    }

    updateUser(user) {

        // let userId = user._id;
        // delete user._id;
        //
        // this.Restangular.one('users', userId).customPUT(user);

        this.Restangular.one('users', user._id).customPUT(user);

    }

}
















/*
 //customer
 getUserByEmailPassword (userDetails) {

 // return this.Restangular.all("users").getList().find(userDetails);
 //return this.users.getList(userDetails);
 // return this.users.customGET("", userDetails);
 // return this.Restangular.one('users').get(userDetails);
 //return this.Restangular.one('users').customGET("", userDetails);


 return this.users.get({email: userDetails.email,
 password: userDetails.password})
 .then((result) => {
 this.users = result;
 },
 (error) => {
 alert('Incorrect e-mail or password. Try enter again.');
 }
 );
 }

 }

 */







