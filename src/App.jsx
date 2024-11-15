import Student from "./Student.jsx"
import Card from "./Card.jsx"
import Button from "./Button.jsx"
import Greeting from"./Greeting.jsx"
import List from"./List"
import Component from"./Component.jsx"
import Compo from "./Compo.jsx"
function App()
{
  return(<>
  {/* cards in react */}
  <Card></Card>
    <Card>
    </Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>

    {/* Buttons in react */}
    <Button></Button>
    
    {/*Props*/}
    <Student name="Aksh" age={19} isStudent={true}/>
    <Student name="Lotus" age={20}/>
    {/* Conditional renedering */}
    <Greeting isLogged={true} user="Akshaya" ></Greeting>
    <List></List>
    <Component></Component>
    <Compo></Compo>
  </>
    
   )
}
export default App;