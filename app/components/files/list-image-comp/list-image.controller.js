/**
 * Created by amurav on 08.04.2017.
 */
export class ListImageController {

    constructor(fileService, Restangular, $state, usersService) {

        this.fileService = fileService;
        this.fileService.getImages().then((res) => {
            this.images = res;
        });
        this.limitCount = "";
        //this.limitCount = this.getCountImages();
        this.view = "";
        //this.imagesLength = this.getCountImages();
        this.$state = $state;
        //this.getCountImages();
        this.usersService = usersService;
        this.currentUser = this.usersService.getUser();

        this.choiseView = () => {
            if (this.$state.current.name === 'page.home.dashboard') {
                this.view = "View All";
            }
            if (this.$state.current.name === 'page.home.images') {
                this.view = "";
            }
            return this.view;
        };
    };

    getCurrentUser () {
        return this.currentUser;
    }

    // getCountImages(){
    //     this.imagesLength = this.images.length;
    //     return this.imagesLength;
    // }

    getLimitCount(){
        if(this.limitView){
            this.limitCount = this.limitView;
        }
    }
}















// getLimitCount(){
//     if(this.$state.current.name==='page.home.dashboard'){
//         this.limitCount = 8;
//         this.view = "View All";
//     }
//     else {
//         this.limitCount = this.getCountImages();
//         this.view = '';
//     }
//     return this.limitCount;
// }
