import { NavigationActions, NavigationContainerComponent, StackActions } from 'react-navigation';
import { NavigationNavigateAction } from 'react-navigation';
// import { DrawerActions } from 'react-navigation-drawer';
import  Screens from './Screens';

interface IConfig {
    navigator?: NavigationContainerComponent;
}

class NavigatorService {
    static config: IConfig = {};

    static setNavigator(nav: any) {
        if (nav) {
            NavigatorService.config.navigator = nav;
        }
    }

    static push(routeName: Screens, params?: any) {
        if (NavigatorService.config.navigator && routeName) {
            const action = StackActions.push({ routeName, params });
            NavigatorService.config.navigator.dispatch(action);
        }
    }

    static navigate(routeName: Screens, params?: any) {
        if (NavigatorService.config.navigator && routeName) {
            const action = NavigationActions.navigate({ routeName, params });
            NavigatorService.config.navigator.dispatch(action);
        }
    }

    static pop() {
        if (NavigatorService.config.navigator) {
            const options = { immediate: true, n: 1 };
            const action = StackActions.pop(options);
            NavigatorService.config.navigator.dispatch(action);
        }
    }

    static popToRoot() {
        if (NavigatorService.config.navigator) {
            const action = StackActions.popToTop();
            NavigatorService.config.navigator.dispatch(action);
        }
    }

    static goBack() {
        if (NavigatorService.config.navigator) {
            const action = NavigationActions.back({});
            NavigatorService.config.navigator.dispatch(action);
        }
    }

    static reset(resetRoutes: string[]) {
        if (NavigatorService.config.navigator && resetRoutes.length > 0) {
            const actions: NavigationNavigateAction[] = [];
            resetRoutes.forEach((routeName: any) => {
                actions.push(NavigationActions.navigate({ routeName }));
            });
            const resetAction = StackActions.reset({
                actions,
                index: resetRoutes.length - 1
            });
            NavigatorService.config.navigator.dispatch(resetAction);
        }
    }

    static openDrawer() {
        if (NavigatorService.config.navigator) {
           // NavigatorService.config.navigator.dispatch(DrawerActions.openDrawer());
        }
    }

    static closeDrawer() {
        if (NavigatorService.config.navigator) {
           // NavigatorService.config.navigator.dispatch(DrawerActions.closeDrawer());
        }
    }

    static logout() {
        // NavigatorService.navigate(Screens.SiteKey);
    }
}

export default NavigatorService;