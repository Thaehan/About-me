import * as React from 'react'
import {
  Container,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Tooltip,
  Button,
  MenuItem,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded'

const pages = ['Giới thiệu', 'Sở thích', 'Tính cách', 'Hông bít nữa']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  )

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        borderWidth: 0,
        boxShadow: 0,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/**Đây là Logo> */}
          <Tooltip title="Đó là tên khác của Đạt Đỗ nhé!">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: {
                  xs: 'none',
                  md: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                fontFamily: 'sans-serif',
                fontWeight: 800,
                letterSpacing: '.3rem',
                color: 'pink',
                textDecoration: 'none',
              }}
            >
              <AcUnitRoundedIcon sx={{ color: 'pink' }} />
              Han
            </Typography>
          </Tooltip>

          {/**Đây là Box chứa các nút menu khi width < */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/**Đây là Logo */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Han
          </Typography>

          {/**Đây là Box chứa các nút menu khi width > */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', flexGrow: 2 }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
