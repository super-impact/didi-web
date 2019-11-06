import React, { useCallback, useState } from 'react';

import Header from '../components/organisms/Header';
import Modal from '../components/organisms/Modal';

enum AuthMode {
  Signup = "Signup",
  Signin = "signin",
  Deactivate = "deactivate"
}

const HeaderContainer: React.FC = () => {
  // open modal
  const [isOpenedModal, setOpenedModal] = useState(false);
  const [authMode, setAuthMode] = useState(AuthMode.Deactivate);

  const openSigninModal = useCallback(() => {
    setOpenedModal(true);
    setAuthMode(AuthMode.Signin);
  }, [setOpenedModal, setAuthMode]);

  const openSignupModal = useCallback(() => {
    setOpenedModal(true);
    setAuthMode(AuthMode.Signup);
  }, [setOpenedModal, setAuthMode]);

  const closeModal = useCallback(() => {
    setOpenedModal(false);
    setAuthMode(AuthMode.Deactivate);
  }, [setOpenedModal, setAuthMode]);

  return (
    <>
      <Header
        onClickSignInButton={openSigninModal}
        onClickSignUpButton={openSignupModal}
      />
      {isOpenedModal && (
        <Modal onCloseModal={closeModal}>
          <h3>{authMode}</h3>
        </Modal>
      )}
    </>
  );
};

export default React.memo(HeaderContainer);
