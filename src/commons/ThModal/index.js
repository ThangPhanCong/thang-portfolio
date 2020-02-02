import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${props => props.isShowModal ? "block" : "none"};
`;

const Main = styled.div`
  position:fixed;
  background: white;
  width: 75%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  padding: 15px;
`;

const Close = styled.div`
  color: red;
  &:hover {
    cursor: pointer;
  }
  right: 4px;
  top: 0px;
  position: absolute;
`;

export default function (props) {
  const [isShowModal, setShowModal] = useState(props.isShowModal);
  const history = useHistory();
  const modalRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  function handleClickOutside(event) {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      toggleModal();
    }
  }

  function toggleModal() {
    setShowModal(s => !s);

    if (isShowModal) {
      history.push("/")
    }
  }

  return (
    <Container isShowModal={isShowModal} >
      <Main ref={modalRef}>
        <Close onClick={() => toggleModal()}>X</Close>
        {props.children}
      </Main>
    </Container>
  )
}
