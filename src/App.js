import "./App.css";

function App() {
  // Example 1
  const createCounter = () => {
    let counter = 0;
    function increase() {
      return ++counter;
    }
    return increase;
  };
  const counterValue = createCounter();
  // Example 2
  const createLogger = (nameSpace) => {
    function logger(message) {
      return `${nameSpace} ${message}`;
    }
    return logger;
  };
  const register = createLogger("Register");
  // Example 3
  const createStorage = (key) => {
    const store = JSON.parse(localStorage.getItem(key)) ?? {};
    const save = () => {
      localStorage.setItem(key, JSON.stringify(store));
    };
    const storage = {
      get(key) {
        return store[key];
      },
      set(key, value) {
        store[key] = value;
        save();
      },
      remove(key) {
        delete store[key];
        save();
      },
    };
    return storage;
  };
  const profileSetting = createStorage("profile_setting");
  profileSetting.set("fullName", "Văn Tỷ");
  profileSetting.set("age", "25");
  // Example 4
  const createApp = () => {
    const cars = [];
    const app = {
      add(car) {
        cars.push(car);
      },
      show() {
        return cars;
      },
    };
    return app;
  };
  const app = createApp();
  app.add("ABC");
  app.add("BCD");
  app.add("EDF");
  return (
    <div className="App">
      {/* Example 1: */}
      <p>{counterValue()}</p>
      <p>{counterValue()}</p>
      <p>{counterValue()}</p>
      {/* Example 2: */}
      <p>{register("Account")}</p>
      <p>{register("Users")}</p>
      <p>{register("Branch")}</p>
      {/* Example 3: */}
      <p>{profileSetting.get("fullName")}</p>
      <p>{profileSetting.remove("fullName")}</p>
      {/* Example 4: */}
      <p>
        {app.show().map((v) => (
          <p>{v}</p>
        ))}
      </p>
    </div>
  );
}

export default App;
