class AppState {
    private static _instance: AppState;
    isLoggedIn: boolean;

    private constructor() {
        this.isLoggedIn = false;
    }

    public static getInstance() {
        // return this._instance || (this._instance = new this())
        if (this._instance) {
            return this._instance
        }

        this._instance = new AppState();
        return this._instance
    }
}

/* 
- create two instances of the app and edit the logged in state
with the second instance. 
- expect BOTH instances to have the same logged in val. 
*/
const app1 = AppState.getInstance();
console.log(app1.isLoggedIn) //False

const app2 = AppState.getInstance();
app1.isLoggedIn = true;

console.log(app1.isLoggedIn === app2.isLoggedIn);
console.log(app1.isLoggedIn);
console.log(app2.isLoggedIn);