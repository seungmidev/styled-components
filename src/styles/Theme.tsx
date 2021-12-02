const fontSizes = {
  title: '3.5rem',
  subtitle: '2.0rem',
};

const color = {
  primaryColor: '#007bff',
  secondaryColor: '#198754',
  lightColor: '#f8f9fa',
  darkColor: '#343a40',
}

const deviceSizes = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px',
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

const theme = {
  fontSizes,
  color,
  device,
};

export default theme;