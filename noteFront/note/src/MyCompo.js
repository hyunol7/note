//이건 주석입니다. 먼저 알아볼건, 모듈 import 부터 알아봄니다.
//ESS 부터, 스크립트도 Module 이라는 개념을 도입해서 내보내기(Export), 가져오기(import) 가능함
//React lib 에서 핵심 module 과 부가 Module 에 대한 내용
//import module,{module,modle} from 'moduleName'; 문법
import React,{Component} from "react"; //React 는 모든 React 모듈의 최상의 이고, 
//{} 내부의 모듈은 그 하위의 named 모듈을 뜻함
//필요에 따라서 하위 모듈은 "," 을 이용해서 계속 import 시킬 수 있음

//React 에서는 보여지는 모든 구성요소를 Component Type 이라고 함 
//즉 보여지는 모든 구성요소는 반드시 Component 의 하위타입이어야 함

//아래는 자바스크립트의 class 를 이용한 컴포넌트 구성
//리엑트에서는 컴포넌트를 구성하는 방법은 크게 function, class 두 개로 나눠지는데, react 18.x 버전 이후부터는 react 의 핵심 컴포넌트중의
//Hooks 를 클래스에서 지원하지 않기 때문에, 현재는 대부분이 function 형태로 컴포넌트를 구성함

class MyCompo extends Component{
    render(){
        return(
            <h2>이건 클래스로 구성된 컴포넌트의 내용입니다.</h2>
        )      
    };
}
export function DoSome(){
    return(
        <h3>이건 doSome 컴포의 내용임.</h3>
    );
}

export default MyCompo;

