import Image from "next/image"
import Link from "next/link"

export const SignIn = () => {
  return (
    <div className="wrapper">
      <div className="container-enter">
        <div className="modal__block">
          <form className="modal__form-login" action="#">
            <Link href="/">
              <div className="modal__logo">
                <Image src="../img/logo_modal.png" alt="logo" />
              </div>
            </Link>
            <input
              className="modal__input login"
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className="modal__input password"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button className="modal__btn-enter">
              <Link href="/signin">Войти</Link>
            </button>
            <button className="modal__btn-signup">
              <Link href="/signup">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}