float sceneDist( vec3 p, vec3 ray) {
    return length(p)-1.0;
}
vec3 sceneColor( vec3 p ) {
    return vec3( 0.0, 1.0, 0.0 );
}
vec3 getNormal( vec3 p ) {
    return p;
}
