import { render,screen } from "@testing-library/react";

import Async from "./Async";

describe('Async Component',()=>{
    
test('render list item from async fn as a tezt',async()=>{
    
    //Arrange
    render(<Async/>);

    //Act
    //...nothing

    //Assert
    const listItemElement =await screen.findAllByRole('listitem');
    expect(listItemElement).not.toHaveLength(0)


})



   
test('render post if request succeeds using mock',async()=>{
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json:async () =>[{id:'p1',title:'First post'}],
    })
    //Arrange
    render(<Async/>);

    //Act
    //...nothing

    //Assert
    const listItemElement =await screen.findAllByRole('listitem');
    expect(listItemElement).not.toHaveLength(0)


})

})