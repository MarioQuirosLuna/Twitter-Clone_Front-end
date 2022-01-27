import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import TagOutlinedIcon from '@mui/icons-material/TagOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'

export const ListOptionsMenu = [
	{ icon: <HomeOutlinedIcon />, url: '/home', label: 'Home'},
	{ icon: <TagOutlinedIcon />, url: '/explore', label: 'Explore'},
	{ icon: <NotificationsOutlinedIcon />, url: '/notifications', label: 'Notifications'},
	{ icon: <EmailOutlinedIcon />, url: '/Message', label: 'Messages'},
	{ icon: <BookmarkBorderOutlinedIcon />, url: '/bookmarks', label: 'Bookmarks'},
	{ icon: <ArticleOutlinedIcon />, url: '/list', label: 'List'},
	{ icon: <PermIdentityOutlinedIcon />, url: '/profile', label: 'Profile'},
	{ icon: <MoreHorizOutlinedIcon />, url: '/more', label: 'More'}
]