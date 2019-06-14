/**
 * Created by amurav on 13.04.2017.
 */
export class StatisticController {
    constructor(authService, fileService) {
        this.authService = authService;
        this.fileService = fileService;
        this.currentUser = this.authService.getUser();
    }

    getCurrentUser () {
        return this.currentUser;
    }

    countUsersDocuments(){
        return this.fileService.getDocumentsByUser().length;
    }

    countUsersImages(){
        return this.fileService.getImagesByUser().length;
    }
}