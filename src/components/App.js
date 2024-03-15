import { createRef, useRef, useState } from "react";

import Header from "./Header";
import InputNumber from "./InputNumber";
import BtnGroup from "./buttons/BtnGroup";

/*
Логика приложения:
1. showNumber, забираем значения из инпута и передаем в state.firstNumber

2. Вносим значение status(- или +) / Делаем переключение на state.secondNumber 
(немного не понимаю как этот переключатель оформить)

3. Отдельная кнопка btnReset - обнуляет state // не понимаю, почему не работает метод=(

4. Реализована отдельная кнопка equal = проверяет наличие в state.firstNumber, 
state.firstNumber и state.status. Возвращаем результат в firstNumber
и передаем данное значение в showResult которое транслирует результат в Input.

*/

// Классовый подход
/*
// class App extends Component {
//   state = {
//     firstNumber: "",
//     secondNumber: "",
//     status: "", // '-' '+'
//     result: "",
//   };

//   inputRef = createRef();

//   showNumber = (value) => {
//     console.log(value);

//     const { status } = this.state;

//     if (!status) {
//       this.setState(() => {
//         return {
//           firstNumber: value,
//         };
//       });
//     } else {
//       this.setState(() => {
//         return {
//           secondNumber: value,
//         };
//       });
//     }
//   };

//   statusValue = (value) => {
//     this.inputRef.current.value = "";
//     this.setState(() => {
//       return {
//         status: value,
//       };
//     });
//   };

//   btnReset = () => {
//     this.setState(() => {
//       return {
//         firstNumber: "",
//         secondNumber: "",
//         status: "",
//       };
//     });
//   };

//   equalValue = () => {
//     const { firstNumber, secondNumber, status } = this.state;

//     let result = 0;
//     if (!firstNumber || !secondNumber || !status) {
//       return alert("Недостаточно данных. Внесите их");
//     }
//     if (status === "+") {
//       result = +firstNumber + +secondNumber;
//     } else if (status === "-") {
//       result = +firstNumber - +secondNumber;
//     }

//     return this.setState(() => {
//       return {
//         firstNumber: "",
//         secondNumber: "",
//         status: "",
//         result: result,
//       };
//     });

//     this.inputRef.current.value = result;
//   };

//   render() {
//     console.log(this.state);
//     return (
//       <div>
//         <Header />
//         <InputNumber showNumber={this.showNumber} inputRef={this.inputRef} />
//         <BtnGroup
//           statusValue={this.statusValue}
//           btnReset={this.btnReset}
//           equalValue={this.equalValue}
//         />
//       </div>
//     );
//   }
// }

// export default App;
*/

//// Функциональный подход
const App = () => {
  const [state, setState] = useState({
    firstNumber: "",
    secondNumber: "",
    status: "",
    result: "",
  });

  const inputRef = useRef();

  const showNumber = (value) => {
    if (!state.status) {
      setState({ ...state, firstNumber: value });
    } else {
      setState({ ...state, secondNumber: value });
    }
  };

  const statusValue = (value) => {
    inputRef.current.value = "";
    setState({ ...state, status: value });
  };

  const btnReset = () => {
    setState({ firstNumber: "", secondNumber: "", status: "", result: "" });
  };

  const equalValue = () => {
    if (!state.firstNumber || !state.secondNumber || !state.status) {
      return alert("Недостаточно данных. Внесите их");
    }

    let totalResult = 0;

    if (state.status === "+") {
      totalResult = +state.firstNumber + +state.secondNumber;
    } else if (state.status === "-") {
      totalResult = +state.firstNumber - +state.secondNumber;
    }

    inputRef.current.value = totalResult;

    setState({
      firstNumber: "",
      secondNumber: "",
      status: "",
      result: totalResult,
    });
  };

  console.log(state);

  return (
    <div>
      <Header />
      <InputNumber showNumber={showNumber} inputRef={inputRef} />
      <BtnGroup
        statusValue={statusValue}
        btnReset={btnReset}
        equalValue={equalValue}
      />
    </div>
  );
};

export default App;
