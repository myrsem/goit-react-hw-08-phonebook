import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import Phonebook from 'components/Phonebook/Phonebook';
import { useGetContactsQuery } from 'redux/contactAPI';

const Contacts = () => {
  const { data: contacts, isLoading } = useGetContactsQuery();
  return (
    <Phonebook>
      <ContactForm />
      <h2 style={{margin:"10px"}}>Contacts</h2>

      {contacts?.length > 0 && (
        <>
          <ContactFilter />
        </>
      )}
      {contacts?.length === 0 && !isLoading && <p>Contact list is empty</p>}
      <ContactList />
    </Phonebook>
  );
}

export default Contacts;