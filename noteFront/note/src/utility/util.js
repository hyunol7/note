//person 객체를 파람으로 받아서, 이미지에 대한 속성 정보를 리턴해주는 함수 정의
//랜더링 목적이 아니기 떄문에 일반 함수로 정의
export function getImgURL(person){

    return(
        'https://i.imgur.com/' + 
        person.imageId +
        person.imageSize + '.jpg'
    );
}