/**
 * Created by amurav on 13.04.2017.
 */

export class AddFileController {
    constructor($state, fileService, usersService) {
        this.$state = $state;
        this.titleForm = "";
        this.fileService = fileService;
        this.usersService = usersService;
        this.currentUser = this.usersService.getUser();
        this.newFile = {
            userId: this.currentUser._id
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
            if (this.$state.current.name === 'page.home.documents') {
                this.titleForm = "Add document";
            }
            if (this.$state.current.name === 'page.home.images') {
                this.titleForm = "Add image";
            }
            return this.titleForm;
        }

    }

    addNewFile (fileDetails, isvalid){
        if (isvalid) {
            if(fileDetails.type === '.png') {
                this.fileService.addImage(fileDetails);
            }
            else {
                this.fileService.addDocument(fileDetails);
            }
        }
        else {
            this.message = "Error";
            this.showError = true;
        }
    };

}
