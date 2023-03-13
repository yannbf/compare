import { Header } from './Header';


export const meta: ReactMeta = {
  title: 'Example/Header',
  component: Header,
};

const commonProps = {
  onLogin: () => {},
  onLogout: () => {},
  onCreateAccount: () => {},
}
export const LoggedIn: ReactStory = () => <Header user={{ name: 'Jane Doe' }} {...commonProps} />;

export const LoggedOut: ReactStory = () => <Header {...commonProps} />;
