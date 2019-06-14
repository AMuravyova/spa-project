/**
 * Created by amurav on 29.03.2017.
 */
class AccountFormController {
    constructor($state, usersService, authService) {
        this.titleForm = "";
        this.$state = $state;
        this.authService = authService;
        this.usersService = usersService;
        this.currentUser = this.usersService.getUser();
        this.cloneUser = this.clone(this.currentUser);
        this.newUser = this.newUser || this.cloneUser;
        //this.newUser = this.newUser || this.currentUser;
        this.addNewUser = (userDetails, isvalid) => {
            if (isvalid) {
                if(this.currentUser){
                    this.usersService.updateUser(userDetails);
                }
                else if(!this.currentUser){
                    this.usersService.addUser(userDetails);
                    this.$state.go('page.auth');
                }
                // if(this.$state.current.name === 'page.home.account'){
                //     this.usersService.updateUser(userDetails);
                // }
                // if(this.$state.current.name === 'page.registration'){
                //     this.usersService.addUser(userDetails);
                //     this.$state.go('page.auth');
                // }
            }
            else {
                this.message = "Error";
                this.showError = true;
            }
        };

        this.getError = (error) => {
            if (angular.isDefined(error)) {
                if (error.required) {
                    return "Поле не должно быть пустым";
                }
                else if (error.email) {
                    return "Введите правильный email";
                }
            }
        };

        this.choiseTitle = () => {
            if (this.$state.current.name === 'page.home.account') {
                this.titleForm = "Account";
            }
            if (this.$state.current.name === 'page.registration') {
                this.titleForm = "Registration";
            }
            return this.titleForm;
        }
    }

    clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    let copy = obj.constructor();
    for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
    }

}

export const accountformComp = {
    templateUrl: './components/account-form-comp/accountform.template.html',
    controllerAs: 'vm',
    controller: AccountFormController
};
