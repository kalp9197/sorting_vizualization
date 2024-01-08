import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Visualiser from "../Visualiser";
import Sidebar from "../Sidebar"
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
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
    generateArr({ size: 9 });
  }, []);
  console.log(arr);

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const sort = async () => {
    setSorting(true);

    let newArr = [...arr];
    const n = newArr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (newArr[j] > newArr[j + 1]) {
          // swap newArr[j] and newArr[j+1]
          let temp = newArr[j];
          newArr[j] = newArr[j + 1];
          newArr[j + 1] = temp;

          setArr([...newArr]); // Update the state to trigger a re-render
          await sleep(500); // Introduce a delay for visualization
        }
      }
    }

    setSorting(false);
  };

  return (
    <>
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

export default Home;