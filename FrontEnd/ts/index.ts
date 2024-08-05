import { WorklistComponent } from "./components/worklist.js";
import { User } from "./models/User.js";
import { createWork, deleteWork, getCategories, getWorks, login } from "./services/sophiebluel.js";
import { imagendur } from "./utils/const.js";

// Create
const testCreate = async () => {
    const userEnDur: User = {
        email: 'sophie.bluel@test.tld',
        password: 'S0phie'
      };
    const currentUser = await login(userEnDur);
    if (currentUser?.token) {
        console.log(currentUser?.token);
        createWork(currentUser.token, imagendur, "toto", 3);
    }
}
// testCreate();

// Read
WorklistComponent();

// Delete
const testDelete = async () => {
    const userEnDur: User = {
        email: 'sophie.bluel@test.tld',
        password: 'S0phie'
      };
    const currentUser = await login(userEnDur);
    if (currentUser?.token) {
        console.log(currentUser?.token);
        deleteWork(currentUser.token, 11);
    }
}
// testDelete();

