/**
 * Created by amurav on 12.04.2017.
 */

export class AuthController {
    constructor($state, usersService, authService) {
        this.$state = $state;
        this.usersService = usersService;
        this.authService = authService;

        this.searchUser = (userDetails, isvalid) => {
            if (isvalid) {
                this.authService.setUser(userDetails);
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
    }

    goToSign() {
        this.$state.go('page.registration');
    }
}













// this.usersService.getUserByEmailPassword(userDetails)
//     .then((result) => {
//     this.user = result;
//     this.$state.go('page.home.dashboard');
// })