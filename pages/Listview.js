import React, { useEffect, useState } from "react";
import { Grid, Header, List, Segment, Modal, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
const axios = require("axios");
function Listview() {
  const [state, setstate] = useState([]);
  const [selectedItem, setselectedItem] = useState();
  const [open, setOpen] = React.useState(false);

  useEffect(async () => {
    var result = await axios.get(
      "http://universities.hipolabs.com/search?country=United+Kingdom",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("result.data", result.data);
    setstate(result.data);
  }, []);

  const handleClick = (item) => {
    console.log("item", item);
    // console.log("item", data);
    setselectedItem(item);
    setOpen(true);
  };
  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            List View
          </Header>
          <List selection verticalAlign="middle">
            {state.length > 0 &&
              state.map(function (item, key) {
                return (
                  <Segment Piled>
                    <List.Item key={key} onClick={() => handleClick(item)}>
                      {item.name}
                    </List.Item>
                  </Segment>
                );
              })}
          </List>
        </Grid.Column>
      </Grid>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Detail View</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>{selectedItem.name}</Header>
            <p>{selectedItem.country}</p>
            <p>{selectedItem.alpha_two_code}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default Listview;
