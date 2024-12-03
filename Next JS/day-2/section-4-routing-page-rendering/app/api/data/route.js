export function GET(request){
    console.log(request);

    return Response.json({message:'Data from next app'})
    
}