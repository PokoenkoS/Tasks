import { AppBar } from "./AppBar/AppBar";
import { Layout } from "./Layout/Layout";
import { TaskForm } from "./TaskForm/TaskForm";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Layout>
      <AppBar/>
      <TaskForm/>
      </Layout>
      
    
    </div>
  );
};
