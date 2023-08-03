import React, {useState} from "react";
import { PageImage } from "../PageImage";
import picture from './img/notebook.png';
import './NotesLandingPage.css';
import { all_notes } from "./notepages/allnotes";
import SearchBar from "../../SearchBar";
import { BackButton } from "../../backbutton/BackButton";
import EmptyList from "../blog/interests/blogList/EmptyList";
import NoteList from "./components/NoteList";

//const GOOGLE_SHEETS_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQsZy4UCE7PRCrsvahnfBWFjSxPD03nvs3mxhjj1rNwdhXz0UmIoiRmPTlO7TQ5vugK7YlCfaQlqs2f/pub?gid=742388108&single=true&output=csv";

export const NotesLandingPage = () => {
    //const a = `$$T_{Q}$$`;

    const [notes, setNotes] = useState(all_notes);
    const [searchKey, setSearchKey] = useState('');

    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };
    
  // Search for blog by category
    const handleSearchResults = () => {
        const allNotes = all_notes;
    
        const filteredNotes = allNotes.filter((notes) =>
        notes.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setNotes(filteredNotes);
    };
    
      // Clear search and show all blogs
    const handleClearSearch = () => {
        setNotes(all_notes);
        setSearchKey('');
    };

    return <>
        <PageImage source={picture}/>
        <h1 className="notes_header"><u>My Notes</u></h1>
        <p className="notes_intro">
            Here contains some of the notes that I have made over the years. I hope the material is helpful
            to those who chance upon this page. It will mostly be Computing and Maths related, but there might
            be a bit of others since I might be taking other types of classes in NUS.
        </p>
        <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={e => setSearchKey(e.target.value)} />
        <h2 className="notes_header">Notes</h2>
        <div style={{margin: "2% 15% 2% 15%" }}>
        {!notes.length ? <EmptyList /> : <NoteList notes={notes} />}
        </div>
        <div style={{margin: "2% 15% 2% 15%" }}>
        <BackButton description={"Back to Home"} redirect_link={'/'} />
        </div>
    </>
}