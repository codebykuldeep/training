import { render,screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('Greeting Component',()=>{
    
test('render Hello world as a tezt',()=>{
    //Arrange
    render(<Greeting/>);

    //Act
    //...nothing

    //Assert
    const helloWorldElement =screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
});


test('renders good to see you if the button is not clicked',()=>{
    render(<Greeting/>);
    const outputElement = screen.getByText('good to see you',{exact:false});
    expect(outputElement).toBeInTheDocument();
})

test('renders good to see you if the button is not clicked',()=>{
    render(<Greeting/>);
    const outputElement = screen.getByText('good to see you',{exact:false});
    expect(outputElement).toBeInTheDocument();
})

test('render TExt Changed as a tezt on button click',()=>{
    //Arrange
    render(<Greeting/>);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    //Assert
    const outputElement =screen.getByText('Text Changed');
    expect(outputElement).toBeInTheDocument();
});


test('render TExt Changed as a tezt on button click',()=>{
    //Arrange
    render(<Greeting/>);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    //Assert
    const outputElement =screen.queryByText('good to see you',{exact:false});
    expect(outputElement).toBeNull();
});

})