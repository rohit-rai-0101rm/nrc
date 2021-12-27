import "antd/dist/antd.css";
import { Layout } from "antd";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Students from "./pages/message/messages";
import EditStudent from "./pages/message/edit-message";
import Student from "./pages/message/message";
import AddMessage from "./pages/message/add-message";
import EditMessage from "./pages/message/edit-message";
import Messages from "./pages/message/messages";
const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout-wrapper">
        <Header
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Link className="ant-btn" to="/students/add">
            Add Message
          </Link>
        </Header>
        <Content className="content-wrapper" style={{ padding: "20px 50px" }}>
          <Switch>
            <Route exact path="/" component={Messages} />
            <Route exact path="/students/add" component={AddMessage} />
            <Route exact path="/students/:id" component={Student} />
            <Route exact path="/students/edit/:id" component={EditMessage} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
