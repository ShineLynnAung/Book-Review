import {
  Avatar,
  Button,
  IconButton,
  InputBase,
  Paper,
  Stack,
  ThemeProvider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../theme";
import { Search } from "@mui/icons-material";

export default function HomePage({ history }) {
  const [loading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const books = [
    {'id': 1,
      'name':"Meditatons",
      'author': "Marcus Aurelius",
      'path':"https://www.classicwisdomcollection.com/cdn/shop/files/MeditationsebookCover.png?v=1693420596"
    },
    {
      'id':2,
      'name':"Next Level Thinking",
      'author': "Joel Osteen",
      'path':"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeP_-_xN6FsKG-d2wgp9iC0FAiWdTMhClrqw&s"
    },
    {
      'id':3,
      'name':"Can't Hurt Me",
      'author': "David Goggins",
      'path':"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcur2ZJId-3s1VR7d5NPykhjQKjNuS-38_ngtL253VSIoS7HuC3pYayqlevxjq4we09EU&usqp=CAU"
    },
    {
      'id':4,
      'name':"Old Man and The Sea",
      'author': "Ernest Hemingway",
      'path':"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHPw_KbLuOuo9ed8davzLAw0MO5w44lifjyQ&s"
    },
    {
      id: 5,
      name: "Atomic Habits",
      author: "James Clear",
      path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIjgtcNpeP-ceE7uzpqCiftbYv_1a47s3B1A&s",
    },
    {
      id: 6,
      name: "The 48 Laws of Power",
      author: "Robert Greene",
      path: "https://img.drz.lazcdn.com/static/mm/p/07bdf9ce6a18b46a90f7eb0a9e92fd32.jpg_720x720q80.jpg_.webp",
    },
  ]
  return (
    <>
      {loading ? (
        <svg
          width="100px"
          className="App-logo absolute top-[30%] left-[50%]"
          height="100px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M17.6566 12H21M3 12H6.34315M12 6.34342L12 3M12 21L12 17.6569"
              stroke="#595B7AFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M16 8.00025L18.3642 5.63611M5.63629 18.364L8.00025 16M8.00022 8.00025L5.63608 5.63611M18.364 18.364L16 16"
              stroke="#77A7C9FF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      ) : (
        <div className="flex">
  {/* Left Sidebar */}
  <div className="w-[30%] h-screen bg-[#7a85ee] fixed md:block hidden">
    <ThemeProvider theme={theme}>
      <Stack direction="row" spacing={2} className="mt-10 ml-8">
        <Avatar
          alt="Andrew"
          sx={{ width: 80, height: 80, mt: 10 }}
          src="https://mir-s3-cdn-cf.behance.net/user/230/c944b01205713867.6535e30a65df7.jpg"
        />
        <div>
          <h1 className="text-white text-3xl font-bold">Andrew</h1>
          <Button
            variant="outlined"
            className="w-24"
            sx={{ borderRadius: "999px", padding: "6px" }}
            onClick={() => history.push("/")}
          >
            Logout
          </Button>
        </div>
      </Stack>
    </ThemeProvider>
  </div>

<div className="w-[70%] ml-[30%]">
  <div className="relative w-full">
    <img
      className="w-full object-cover h-60 opacity-75 filter brightness-50"
      src="https://images.unsplash.com/photo-1490332695540-5acc256ec383?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
    />
    <h1 className="text-center absolute left-1/2 transform -translate-x-1/2 top-14 font-medium text-lg text-white">
      Find Your Next Book to Read
    </h1>
    <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search For a Book"
          inputProps={{ "aria-label": "Search For a Book" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <Search />
        </IconButton>
      </Paper>
    </div>
  </div>

  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-3 mb-3">
    {books.map((book) => (
      <div key={book.id} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
        <img src={book.path} alt={book.name} className="w-full h-80 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{book.name}</h2>
          <p className="text-sm font-medium text-gray-600">{book.author}</p>
        </div>
      </div>
    ))}
  </div>
</div>

</div>

      )}
    </>
  );
}
