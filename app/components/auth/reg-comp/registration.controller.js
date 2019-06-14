/**
 * Created by amurav on 13.04.2017.
 */

export class LogFormController {
    constructor($state){
        this.$state = $state;
        this.goToAuth = () => {
            this.$state.go('page.auth');
        };
    }
}