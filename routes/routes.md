/api/v1
[USER]
POST-----/users------------------register--------[]

GET------/users/[id]-------------single user-----[]

GET------/users------------------all users-------[auth, admin]
PATCH----/users/[id]-------------update user-----[auth, customer]
DELETE---/users/[id]-------------delete user-----[auth, customer]

PATCH----/users/role/[id]--------give role-------[auth, admin]

---

[IMAGE]
GET------/images-----------------all images------[]
GET------/images/[id]------------single image----[]
POST-----/images-----------------add image-------[auth, seller]

GET------/images/[user]----------seller images---[]
PATCH----/images/[user]/[id]-----update image----[auth, seller]
DELETE---/images/[user]/[id]-----delete image----[auth, seller]

---

[ORDER]

---

[REVIEW]
