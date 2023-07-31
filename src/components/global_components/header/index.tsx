import React from 'react'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import { InputAdornment, MenuItem, Select, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Header = () => {
  return (
    <section>
      <div className="flex">
        <div className="flex">
          <div className="w-[100px] bg-red-600">
            <p className="text-white">NINTENDO</p>
          </div>
          <TextField
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="flex">
          <div>
            <HelpCenterIcon />
            assistencia
          </div>
          <div>
            <FavoriteIcon />
            lista de de desejos
          </div>
          <div>
            <PersonIcon />
            login
          </div>
        </div>
      </div>
      <div>
        <div> logo e dropdown contendo categoria de jogos </div>
        <div> logo e dropdown contendo consoles </div>
        <div> logo e dropdown contendo novidades e eventos </div>
      </div>
    </section>
  )
}

export default Header
