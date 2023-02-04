# is-chroot

Check whether the current process is running inside a chroot. Currently only supports ext2, ext3 and ext4 file systems.


## Installation

```sh
npm i is-chroot
```

## Usage

```js
import isChroot from 'is-chroot'

isChroot()
```

Behind the scenes `isChroot()` checks whether the inode of `/` is exactly `2`. If this isn't the case and the file system is ext2, ext3 or ext4 then it's likely that the current process is running inside a chroot. Please note that this is [only a heuristic](https://stackoverflow.com/questions/75182/detecting-a-chroot-jail-from-within) and can be improved by considering additional factors.
