'use client';

import { Box, Container, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { FormControl } from '@mui/base/FormControl';
import { Label } from '@mui/icons-material';

function Profile() {
  return (
    <Container component="main" maxWidth="xs">
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <Typography component="h2">Profile</Typography>
        <Typography variant="caption" component="h2">
          This information will be displayed publicly so be careful what you
          share.
        </Typography>

        <FormControl defaultValue="" required>
          <Label>Nameddddddddddddd</Label>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </FormControl>
      </Box>
    </Container>
  );
}

export default Profile;
