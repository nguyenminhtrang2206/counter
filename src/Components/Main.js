import Button from "./Button"
import Circle from "./Circle"

const Main = () => {
    return (
        <main>
            <div class="circle-area">
                <div class ="box">
                    <Circle />
                </div>
            </div>
    
            <div class="buttons">
                <Button name="Add one"/>
                <Button name="Remove one"/>
                <Button name="Reset"/>
            </div>
        </main>
    )
}

export default Main;