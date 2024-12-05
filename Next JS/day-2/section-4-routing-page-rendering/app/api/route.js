export function GET(request){
    console.log(request);

    return Response.json({message:'You done a get request now'})
    
}