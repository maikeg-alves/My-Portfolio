import { Box, Skeleton } from "@mui/material";
import {
  Col,
  Container,
  Modal,
  ModalHeader,
  Row,
  Stack,
} from "react-bootstrap";
import {
  ImgDemostration,
  ModalProject,
} from "../themes/styles/components/Project-select-style";
import { Item } from "../themes/styles/Projects_styles";

export function Sheleton_skills() {
  return (
    <Box
      sx={{
        pt: 0.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <li>
        <Skeleton variant="rectangular" width={100} height={100} />
      </li>
      <li>
        <Skeleton variant="rectangular" width={100} height={100} />
      </li>
      <li>
        <Skeleton variant="rectangular" width={100} height={100} />
      </li>
      <li>
        <Skeleton variant="rectangular" width={100} height={100} />
      </li>
      <li>
        <Skeleton variant="rectangular" width={100} height={100} />
      </li>
      <li>
        <Skeleton variant="rectangular" width={100} height={100} />
      </li>
      <li>
        <Skeleton variant="rectangular" width={100} height={100} />
      </li>
      <li>
        <Skeleton variant="rectangular" width={100} height={100} />
      </li>
      <li>
        <Skeleton variant="rectangular" width={100} height={100} />
      </li>
      <li>
        <Skeleton variant="rectangular" width={100} height={100} />
      </li>
      <li>
        <Skeleton variant="rectangular" width={100} height={100} />
      </li>
      <li>
        <Skeleton variant="rectangular" width={100} height={100} />
      </li>
      <li>
        <Skeleton variant="rectangular" width={100} height={100} />
      </li>
    </Box>
  );
}

export function Skeleton_Projects() {
  return (
    <>
      <Item>
        <Skeleton
          sx={{ bgcolor: "#424242" }}
          animation="wave"
          variant="rectangular"
        />
      </Item>
      <Item>
        <Skeleton
          sx={{ bgcolor: "#424242" }}
          animation="wave"
          variant="rectangular"
        />
      </Item>
      <Item>
        <Skeleton
          sx={{ bgcolor: "#424242" }}
          animation="wave"
          variant="rectangular"
        />
      </Item>
      <Item>
        <Skeleton
          sx={{ bgcolor: "#424242" }}
          animation="wave"
          variant="rectangular"
        />
      </Item>
      <Item>
        <Skeleton
          sx={{ bgcolor: "#424242" }}
          animation="wave"
          variant="rectangular"
        />
      </Item>
    </>
  );
}

export function Skeleton_Select() {
  return (
    <>
      <ModalHeader closeButton></ModalHeader>
      <Modal.Body>
        <Container>
          <Row>
            <ModalProject className="d-flex justify-content-between">
              <Col xs={6}>
                <Col xs={12}>
                  <h1>  <Skeleton variant="text" width={300} height={97} /> </h1>
                </Col>
                <Col xs={12}>
                  <p> <Skeleton variant="text" width={100} /></p>
                </Col>
                <div>
                  <p className="text-brek">
                  <Skeleton variant="text" width={250} />
                  <Skeleton variant="text" width={300} />
                  <Skeleton variant="text" width={300} />
                  <Skeleton variant="text" width={300} />
                  <Skeleton variant="text" width={300} />
                  <Skeleton variant="text" width={300} />
                  <Skeleton variant="text" width={300} />
                  <Skeleton variant="text" width={300} />
                  <Skeleton variant="text" width={300} />
                  <Skeleton variant="text" width={300} />
                  <Skeleton variant="text" width={300} />
                  <Skeleton variant="text" width={300} />
                  <Skeleton variant="text" width={290} />
                  <Skeleton variant="text" width={280} />
                  </p>
                </div>
              </Col>
              <Col xs={5}>
                <div>
                  <p><Skeleton variant="text" width={175} /></p>
                </div>
                <ImgDemostration>
                  <Skeleton
                        animation="wave"
                        variant="rectangular"
                        width={"100%"}
                        height={150}
                        style={{ borderRadius: "10px" }}
                      />
                </ImgDemostration>
                <Stack direction="horizontal" className="pt-3" gap={2}>
                    <Stack gap={3}>
                          <a href=''><Skeleton variant="text" width={150} /></a>
                          <p>
                          <Skeleton variant="text" width={100} />
                          </p>
                          <p>
                          <Skeleton variant="text" width={100} />
                          </p>
                      </Stack>
                  <Stack
                    direction="vertical"
                    className="align-items-center"
                    pacing={1}
                    gap={1}
                  >
                    <Skeleton variant="text" width={100} />
                    <Skeleton variant="circular" width={70} height={70} />
                  </Stack>
                </Stack>
                <div className="pt-3">
                  <p><Skeleton variant="text" width={100} /></p>
                  <Stack direction="horizontal" gap={4}>
                    <li>
                      <Skeleton 
                        animation="wave"
                        variant="rectangular"
                        width={100}
                        height={100}
                      />
                    </li>
                    <li>
                    <Skeleton 
                        animation="wave"
                        variant="rectangular"
                        width={100}
                        height={100}
                      />
                    </li>
                    <li>
                    <Skeleton 
                        animation="wave"
                        variant="rectangular"
                        width={100}
                        height={100}
                      />
                    </li>
                  </Stack >
                </div>
              </Col>
            </ModalProject>
          </Row>
        </Container>
      </Modal.Body>
    </>
  );
}
