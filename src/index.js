import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
const customTheme = {
  button: {
    valid: {
      colors: [
        'dark'
      ],
    },
    styles: {
      base: {
        initial: {
          className: "capitalize font-medium"
        }
      },
      variants: {
        filled: {
          cyan: {
            background: "bg-cyan",
            color: "text-dark"
          },
          yellow: {
            background: "bg-yellow",
            color: "text-dark"
          },
          blue: {
            background: "bg-blue",
            color: "text-white"
          },
          red: {
            background: "bg-red",
            color: "text-white"
          },
          dark: {
            background: "bg-dark",
            color: "text-white",
            className: "border border-[#383B3D]"
          },
        },
        outlined: {
          cyan: {
            background: "bg-cyan",
            color: "text-dark"
          },
          yellow: {
            background: "bg-yellow",
            color: "text-dark"
          },
          blue: {
            background: "bg-blue",
            color: "text-white"
          },
          red: {
            background: "bg-red",
            color: "text-white"
          },
          dark: {
            background: "bg-dark",
            color: "text-white",
            className: "border border-[#383B3D]"
          },
        }
      },

    },
  },
  iconButton: {
    valid: {
      colors: [
        'dark'
      ],
    },
    styles: {
      variants: {
        outlined: {
          cyan: {
            background: "bg-cyan",
            color: "text-dark"
          },
          yellow: {
            background: "bg-yellow",
            color: "text-dark"
          },
          blue: {
            background: "bg-blue",
            color: "text-white"
          },
          red: {
            background: "bg-red",
            color: "text-white"
          },
          dark: {
            background: "bg-dark",
            color: "text-white"
          },
        }
      },

    },
  },
  navbar: {
    styles: {
      variants: {
        filled: {
          cyan: {
            background: "bg-cyan",
            color: "text-dark"
          },
          yellow: {
            background: "bg-yellow",
            color: "text-dark"
          },
          blue: {
            background: "bg-blue",
            color: "text-white"
          },
          red: {
            background: "bg-red",
            color: "text-white"
          },
          dark: {
            background: "bg-dark",
            color: "text-white"
          }
        }
      },
    },
    valid: {
      colors: [
        'dark'
      ],
    }
  },

  card: {
    valid: {
      colors: [
        'dark'
      ],
    },
    styles: {
      variants: {
        filled: {
          cyan: {
            background: "bg-cyan"
          },
          yellow: {
            background: "bg-yellow"
          },
          blue: {
            background: "bg-blue"
          },
          red: {
            background: "bg-red"
          },
          dark: {
            background: "bg-dark"
          },

        }
      }
    }
  },

  input: {
    styles: {
      base: {
        container: {
          className: "relative w-min min-w-[100px] h-auto flex items-center",
        },
        label: {
          className: "!leading-[3.25]"
        }
      },
      variants: {
        outlined: {
          cyan: {
            background: "bg-cyan"
          },
          yellow: {
            background: "bg-yellow"
          },
          blue: {
            background: "bg-blue"
          },
          red: {
            background: "bg-red"
          },
          dark: {
            background: "bg-dark",
            className: "border border-[#383B3D]"

          },

        }
      }
    }
  }
}
root.render(
  <React.StrictMode>
    <ThemeProvider value={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
