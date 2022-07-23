import { Outlet } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom"
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path=":id" element={<HomeDetail></HomeDetail>}></Route>
            <Route path="test" element={<Test></Test>}></Route>
          </Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
    </div>
  );
}

function HomeDetail() {
  return <div>HomeDetail</div>
}

function Test() {
  return <div>test</div>
}

function Home() {
  console.log('test ')
  return <div>
    <main>
      <h2>Welcome to the homepage</h2>
    </main>
    <nav>
      <Link to="/about">about</Link>
    </nav>
    <Outlet />
  </div>
}
function About() {
  return <div>
    <main>
      <h2>Welcome to the about page</h2>
    </main>
    <nav>
      <ol>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </ol>

    </nav>
  </div>
}
export default App;
