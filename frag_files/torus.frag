const vec3 t = vec3(2.0, 0.5, 0.0); // radian, width, 0
float sceneDist( vec3 p , vec3 ray) {
    vec2 q = vec2(length(p.xz)-t.x,p.y);
    return length(q)-t.y;
}
vec3 sceneColor( vec3 p ) {
    return vec3( 0.0, 1.0, 0.0 );
}
vec3 getNormal( vec3 p ) {
    float r = t.x/length(p.xz);
    vec3 q = vec3(p.x*r, 0.0, p.z*r);
    return p - q;
}