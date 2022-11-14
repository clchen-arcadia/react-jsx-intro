"use strict";

const tweets = [
  { username: "BigWhale", name: "Test1", date: "11/14", message: "Hello" },
  { username: "lichee", name: "Test2", date: "11/12", message: "Sup" },
  { username: "firebat2003", name: "Test3", date: "11/13", message: "Yo" }
]

function App() {
  return (<div>
    <Tweet
      username="BigWhale"
      name="Test1"
      date="11/14"
      message="Hello"
    />
    <Tweet
      username="lichee"
      name="Test2"
      date="11/12"
      message="Sup"
    />
    <Tweet
      username="firebat2003"
      name="Test3"
      date="11/13"
      message="Yo"
    />
  </div>)
}
