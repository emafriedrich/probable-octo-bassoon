import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  files: [],
  selectedFile: null,
  loading: false,
  uniqFiles: [],
};

export const filesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loadFiles: (state) => {
      state.files = [];
      state.loading = true;
    },
    filesLoaded: (state, action) => {
      state.files = action.payload;
      const files = [];
      for (const line of state.files) {
        if (files.indexOf(line.file) === -1) {
          files.push({
            file: line.file,
            validLines: line.lines.length
          });
        }
      }
      state.uniqFiles = files;
      state.loading = false;
    },
    showFile: (state, action) => {
      state.selectedFile = action.payload;
      state.files = [];
      state.loading = true;
    },
    showFileFinished: (state, action) => {
      state.files = action.payload;
      state.loading = false;
    },
  },
});

export const { loadFiles, filesLoaded, showFile, showFileFinished } = filesSlice.actions;

export default filesSlice.reducer;
