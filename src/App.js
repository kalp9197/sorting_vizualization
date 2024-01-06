import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Visualiser from "./components/Visualiser";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [arr, setArr] = useState([]);
  const [generating, setGenerating] = useState(false);
  const [sorting, setSorting] = useState(false);
  const generateArr = (formState) => {
    setGenerating(true);
    setTimeout(() => {
      let newArr = [];
      while (newArr.length <= formState.size) {
        let random = Math.floor(Math.random() * (200 - 10) + 10);
        if (newArr.indexOf(random) === -1) {
          newArr.push(random);
        }
      }
      setArr([...newArr]);
      setGenerating(false);
    }, 500);
  };

  useState(() => {
    generateArr({ size: 10 });
  }, []);
  console.log(arr);

  const sort = () => {
    setSorting(true);
    setTimeout(() => {
      let newArr = [...arr];
      for (let i = 0; i < arr.length - 1; i++) {
        setTimeout(() => {
          for (let j = i + 1; j < arr.length; j++) {
            if (newArr[i] > newArr[j]) {
              let temp = newArr[i];
              newArr[i] = newArr[j];
              newArr[j] = temp;
              let newStep = [...newArr];

              setTimeout(() => {
                setArr([...newStep]);
              }, j * 100);
            }
            if (i === arr.length - 2) {
              setSorting(false);
            }
          }
        }, i * 1000);
      }
    }, 500);
  };
  return (
      <>
      <Header/>
    <Box p={"4"}>
      <Flex gap={"4"}>
        <Sidebar
          generateArr={generateArr}
          generating={generating}
          sorting={sorting}
          sort={sort}
        />
        <Visualiser data={arr} />
      </Flex>
    </Box>
    </>
  );
}

export default App;